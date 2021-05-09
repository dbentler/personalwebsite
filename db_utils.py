# db_utils AKA Darren Bentler Utilities
"""
The purpose of db_utils is to provide utility functions for the back-end (main.py) for darrenbentler.com, and keep main.py clean.
"""
from sys import platform
from pathlib import Path

def get_project_root() -> Path:
    return Path(__file__).parent.parent

def refine_path():
    if platform == "linux" or platform == "linux2":
        return str(get_project_root()) + "srv/"
    elif platform == "win32":
        return str(get_project_root()) + "\\personalwebsite\\"

ROOT = refine_path()

def renderMarkdown(file_location):
    """
    Reads a markdown file and returns its contents as a string
    string --> string
    """
    content = ""
    with open(ROOT + file_location, "r") as f:
        content = f.read()
    f.close()
    return content

