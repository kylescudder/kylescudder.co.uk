#!/usr/bin/env python3
"""Portfolio settings and hooks for the shared host deployer (deploy_core.py)."""
from pathlib import Path

import deploy_core as core


APP = core.App(
    name='kylescudder-site', title='Portfolio',
    image='ghcr.io/kylescudder/kylescudder-site', repo='kylescudder/kylescudder.co.uk',
    image_var='PORTFOLIO_IMAGE', service='kylescudder-site', app_dir=Path(__file__).resolve().parents[1],
    workflow='deploy.yml')

if __name__ == '__main__':
    core.cli(APP, __file__)
