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
        self.url = "https://civicsquestions.com/questions/"

    def run(self):
        self.start_driver()
        self.skip_select_state()
        self.get_content()
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

    def skip_select_state(self):
        self.wait_until_ready((By.ID, "submit-location"))
        self.driver.find_element(
            By.XPATH, "/html/body/div[2]/div/div[2]/div[104]/div/div/div/div[4]/a").click()

    def get_content(self):
        '''
        American Government
        A: Principles of American Democracy 1-12
        B: System of Government 13-47
        C: Rights and Responsibilities 48-57
        American History
        A: Colonial Period and Independence 58-70
        B: 1800s 71-77
        C: Recent American History and Other Important Historical Information 78-87
        Integrated Civics
        A: Geography 88-95
        B: Symbols 96-100
        '''
        database = []
        for i in range(1, 101):
            container = self.driver.find_element(By.ID, f"question-{i}")
            question = container.find_element(By.TAG_NAME, "h3").text
            answers = []
            es_answers = container.find_elements(
                By.TAG_NAME, "p")
            for e in es_answers:
                answers.append(e.text)
            if i >= 1 and i <= 12:
                chapter = "American Government"
                section = "A: Principles of American Democracy"
            if i >= 13 and i <= 47:
                chapter = "American Government"
                section = "B: System of Government"
            if i >= 48 and i <= 57:
                chapter = "American Government"
                section = "C: Rights and Responsibilities"
            if i >= 58 and i <= 70:
                chapter = "American History"
                section = "A: Colonial Period and Independence"
            if i >= 71 and i <= 77:
                chapter = "American History"
                section = "B: 1800s"
            if i >= 78 and i <= 87:
                chapter = "American History"
                section = "C: Recent American History and Other Important Historical Information"
            if i >= 88 and i <= 95:
                chapter = "Geography"
                section = "A: Colonial Period and Independence"
            if i >= 96 and i <= 100:
                chapter = "Symbols"
                section = "B: 1800s"

            database.append({
                "id": i,
                "chapter": chapter,
                "section": section,
                "question": question,
                "answers": answers,
                "accept_answers": 1
            })
            print(question)
            print(answers)

        write_json("naturalization_questions.json", database)

    def quit(self):
        self.driver.quit()


color = CssClass()
color.run()
