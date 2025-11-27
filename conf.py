# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'PHNTM Bridge'
copyright = '2025, Phantom Cybernetics Inc'
author = 'Mirek Burkon'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = [
    'sphinxcontrib.jquery',
    'sphinxcontrib.email',
]
# 'sphinx_js'
# it'd be nice to generate the exact same kind of documentation from live JS, 
# but sphinx_js is shit and generates unreadable crap
# so I guess we'll work on parsing later

templates_path = ['_templates']
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_logo = 'img/phntm_logo_white.png'
html_favicon = 'img/favicon-white-16x16.png'
html_theme = 'sphinx_rtd_theme'
html_static_path = ['_static']

html_css_files = [
    'custom.css',
]

html_js_files = [
    'custom.js',
    'https://analytics.phntm.io/gs.js',
    'analytics.js'
]

# js_source_path = [
#     '../bridge_ui/static',
#     '../bridge_ui/static/widgets',
#     '../bridge_ui/static/widgets/inc',
#     '../bridge_ui/static/widgets/video',
#     '../bridge_ui/static/widgets/world-model-3d',
# ]

root_for_relative_js_paths = '../bridge_ui/static'

# github_url = 'https://github.com/PhantomCybernetics'
vcs_pageview_mode = 'edit'

html_theme_options = {
    'logo_only': True,
    'collapse_navigation': True,
    'style_external_links': True,
    # 'prev_next_buttons_location': 'bottom',
    # 'style_external_links': False,
    # 'vcs_pageview_mode': '',
    # 'style_nav_header_background': 'white',
    # 'flyout_display': 'hidden',
    # 'version_selector': True,
    # 'language_selector': True,
    # # Toc options
    # 'collapse_navigation': True,
    # 'sticky_navigation': True,
    # 'navigation_depth': 4,
    # 'includehidden': True,
    # 'titles_only': False
}
