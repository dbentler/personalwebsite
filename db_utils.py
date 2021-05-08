# db_utils AKA Darren Bentler Utilities
"""
The purpose of db_utils is to provide utility functions for the back-end (main.py) for darrenbentler.com, and keep main.py clean.

NOTE TO SELF: Switch \\ to / when staging to dev branch!
"""

from pathlib import Path

def get_project_root() -> Path:
    return Path(__file__).parent.parent

ROOT = str(get_project_root()) + "/"


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

