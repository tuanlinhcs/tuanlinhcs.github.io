from selenium import webdriver
# from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains

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


class CssClass:
    def __init__(self):
        self.url = "https://getcssscan.com/css-shapes"

    def run(self):
        self.start_driver()
        self.get_css()
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

    def get_css(self):
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

        fw = open("shapes.scss", "w")
        list_boxes = []
        list_css = []
        last_css = ""
        with alive_bar(len(li_elements)) as bar:
            for idx, li_e in enumerate(li_elements):
                bar()
                # if idx == 10:
                #     break
                try:
                    self.driver.execute_script(
                        "arguments[0].scrollIntoView({block: 'center'});", li_e)

                    li_e.click()
                    while True:
                        clipboard_content = pyperclip.paste()
                        html = clipboard_content.split(
                            "{")[0].replace(".", "").replace(" ", "")
                        css = clipboard_content.replace("\r", "")
                        if css == last_css:
                            input(f"Try to copy again {idx+1}\n")
                            continue
                        if css not in list_css:
                            list_css.append(css)
                            last_css = css
                            break
                    temp_name = html.replace("-", " ").title()
                    fw.write(f"\n\n // {temp_name} \n")

                    list_boxes.append({
                        "id": idx,
                        "name": temp_name,
                        "html": f'<div class="{html}"></div>',
                        "css": css,
                        "text": clipboard_content
                    })
                    fw.write(css)
                except Exception as e:
                    print(e)
                    cprint(idx, "red")
                    input("continue")
                    pass
        fw.close()
        write_json("css_shapes.json", list_boxes)

    def quit(self):
        self.driver.quit()


color = CssClass()
color.run()