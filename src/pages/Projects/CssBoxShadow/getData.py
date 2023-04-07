from selenium import webdriver
# from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

import time
import os

from termcolor import colored, cprint
from alive_progress import alive_bar
import json
import sys
import re

import pyperclip


def format_class(class_name):
    return class_name.replace(" ", ".")


def write_json(file_path, data):
    with open(file_path, "w", encoding="utf-8") as json_file:
        json.dump(data, json_file, ensure_ascii=False, indent=2)


def read_json(file_path):
    with open(file_path, "r", encoding="utf-8") as json_file:
        return json.load(json_file)


def create_folder_if_not_exists(folder_path):
    if not os.path.exists(folder_path):
        os.mkdir(folder_path)


class CssBoxShadowClass:
    def __init__(self):
        self.url = "https://getcssscan.com/css-box-shadow-examples"

    def run(self):
        self.start_driver()
        self.get_css_box_shadow()
        self.quit()

    def start_driver(self):
        cprint("[*] Starting driver...", "green")
        options = webdriver.FirefoxOptions()
        # options.add_argument('--headless')  # run in headless mode (no UI)
        self.driver = webdriver.Firefox(options=options)

        self.driver.get(self.url)

        wait = WebDriverWait(self.driver, 10)
        try:
            wait.until(EC.presence_of_element_located((By.TAG_NAME, 'body')))
        except:
            print("Timed out waiting for page to load")

    def wait_until_ready(self, condition):
        wait = WebDriverWait(self.driver, 10)
        try:
            wait.until(EC.presence_of_element_located(condition))
        except:
            print("Timed out waiting for page to load")

    def get_css_box_shadow(self):
        # Get scroll height
        last_height = self.driver.execute_script(
            "return document.body.scrollHeight")
        while True:
            self.driver.execute_script(
                "window.scrollTo(0, document.body.scrollHeight);")
            time.sleep(2)
            new_height = self.driver.execute_script(
                "return document.body.scrollHeight")
            if new_height == last_height:
                break
            last_height = new_height

        ul_element = self.driver.find_element(
            By.TAG_NAME, "ul")
        li_elements = ul_element.find_elements(
            By.TAG_NAME, "li")

        print(len(li_elements))

        list_boxes = []
        with alive_bar(len(li_elements)) as bar:
            for idx, li_e in enumerate(li_elements):
                bar()
                try:
                    self.driver.execute_script(
                        "arguments[0].scrollIntoView();", li_e)
                    li_e.click()
                    clipboard_content = pyperclip.paste()
                    list_boxes.append({
                        "id": idx,
                        "text": clipboard_content,
                        "style": clipboard_content.replace("box-shadow: ", "").replace(";", "")
                    })

                except:
                    cprint(idx, "red")
                    pass

        write_json("css_box_shadow.json", list_boxes)

    def quit(self):
        self.driver.quit()


color = CssBoxShadowClass()
color.run()
