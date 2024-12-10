# Phntm Bridge Docs

Sources for https://docs.phntm.io/bridge

### Clone this repo
```bash
cd ~
git clone git@github.com:PhantomCybernetics/phntm_bridge_docs.git
cd phntm_bridge_docs
```

### Install Sphinx & Deps
On Ubuntu:

```bash
python3 -m venv sphinx_env
source ~/sphinx_env/bin/activate

pip install -U sphinx
pip install sphinxcontrib.jquery
pip install sphinxcontrib.email
pip install sphinx_rtd_theme
```

### Build the docs
```bash
cd ~/phntm_bridge_docs
rm -rf _build/*; make html
```
