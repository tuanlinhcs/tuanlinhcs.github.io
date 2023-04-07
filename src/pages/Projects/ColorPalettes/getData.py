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


def get_text_color(background_color):
    """
    Returns 'white' or 'black' depending on which text color would be most readable
    on the given background color.
    """
    # Convert the input color to RGB values
    r, g, b = tuple(int(background_color[i:i+2], 16) for i in (0, 2, 4))

    # Calculate the relative luminance of the background color
    # using the formula recommended by the WCAG 2.0 standard
    luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255

    # Return 'white' if the luminance is below a certain threshold,
    # otherwise return 'black'
    return 'white' if luminance < 0.5 else 'black'


class ColorPalletesClass:
    def __init__(self):
        self.url = "https://coolors.co/palettes/trending"

    def run(self):
        self.start_driver()
        self.skip_cookies()
        self.skip_howdy()
        self.get_color_palettes()
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

    def skip_cookies(self):
        try:
            cprint("[*] Skipping cookies", "green")
            self.wait_until_ready((
                By.ID, "iubenda-cs-banner"))
            close_btn = self.driver.find_element(
                By.XPATH, '//button[contains(text(), "Reject")]')
            close_btn.click()
        except Exception as e:
            print(e)

    def skip_howdy(self):
        try:
            cprint("[*] Skipping Howdy", "green")
            self.wait_until_ready((
                By.ID, "modal-fabrizio"))
            modal_fabrizio = self.driver.find_element(
                By.ID, "modal-fabrizio")
            reject_btn = modal_fabrizio.find_element(
                By.CLASS_NAME, format_class("modal_button-right modal_close-btn btn btn--xs btn--transparent btn--icon"))
            reject_btn.click()

        except Exception as e:
            print(e)

    def get_color_palettes(self):
        # Get scroll height
        last_height = self.driver.execute_script(
            "return document.body.scrollHeight")
        while True:
            self.driver.execute_script(
                "window.scrollTo(0, document.body.scrollHeight);")
            time.sleep(5)
            new_height = self.driver.execute_script(
                "return document.body.scrollHeight")
            if new_height == last_height:
                break
            last_height = new_height

        explore_palettes_results_container = self.driver.find_element(
            By.ID, "explore-palettes_results-container")
        explore_palettes_cols = explore_palettes_results_container.find_elements(
            By.CLASS_NAME, format_class("explore-palettes_col"))

        print(len(explore_palettes_cols))

        list_color_palettes = []
        with alive_bar(len(explore_palettes_cols)) as bar:
            for idx, explore_palettes_col in enumerate(explore_palettes_cols):
                bar()
                try:
                    self.driver.execute_script(
                        "arguments[0].scrollIntoView();", explore_palettes_col)
                    # print("Click on ...")
                    dots = explore_palettes_col.find_element(
                        By.CLASS_NAME, format_class("link link--secondary palette-card_more-btn"))
                    dots.click()

                    # print("Click on Export Palette")
                    self.wait_until_ready(
                        (By.XPATH, '//a[contains(text(), "Export palette")]'))
                    self.driver.find_element(
                        By.XPATH, '//a[contains(text(), "Export palette")]').click()

                    # * CSS
                    # print("Click on CSS")
                    self.wait_until_ready(
                        (By.XPATH, '//a[contains(text(), "CSS")]'))
                    self.driver.find_element(
                        By.XPATH, '//a[contains(text(), "CSS")]').click()

                    # print("Copy CSS Code View")
                    self.wait_until_ready(
                        (By.CSS_SELECTOR, "code#text-viewer_text"))
                    css = self.driver.find_element(
                        By.CSS_SELECTOR, "code#text-viewer_text").text
                    # print(css)

                    # print("Close CSS Code View")
                    self.driver.find_element(By.ID, "text-viewer").find_element(By.CLASS_NAME, format_class(
                        "modal_button-left modal_close-btn btn btn--xs btn--transparent btn--icon")).click()

                    # * Code
                    # print("Click on Code")
                    self.wait_until_ready(
                        (By.XPATH, '//a[contains(text(), "Code")]'))
                    self.driver.find_element(
                        By.XPATH, '//a[contains(text(), "Code")]').click()

                    # print("Copy Code Code View")
                    self.wait_until_ready(
                        (By.CSS_SELECTOR, "code#text-viewer_text"))
                    code = self.driver.find_element(
                        By.CSS_SELECTOR, "code#text-viewer_text").text

                    json_data = json.loads(code.split("/* Extended Array */")
                                           [1].split("/* XML */")[0])

                    # for i_color in json_data:
                    #     i_color["textcolor"] = get_text_color(i_color["hex"])

                    # print("Close Code Code View")
                    self.driver.find_element(By.ID, "text-viewer").find_element(By.CLASS_NAME, format_class(
                        "modal_button-left modal_close-btn btn btn--xs btn--transparent btn--icon")).click()

                    # print("Close Export Palette")
                    self.driver.find_element(By.ID, "palette-exporter").find_element(By.CLASS_NAME, format_class(
                        "modal_button-left modal_close-btn btn btn--xs btn--transparent btn--icon")).click()

                    # print("Add to list")
                    list_color_palettes.append({"css": css, "code": json_data})

                except:
                    cprint(idx, "red")
                    pass

        print(len(list_color_palettes))

        write_json("color_palettes.json", list_color_palettes)

    def quit(self):
        self.driver.quit()


color = ColorPalletesClass()
color.run()
