############
Landing Page
############
Python/Django Implementation
----------------------------

Development Setup
=================

Install project
---------------

``virtualenvwrapper``
^^^^^^^^^^^^^^^^^^^^^
These instructions assume that you have already set up ``virtualenv`` and ``virtualenvwrapper``.

1. Create a new project with Python 3 with ``mkproject -p `which python3` rylviach_site``
2. Edit your ``.virtualenv/rylviach_site/bin/postactivate.sh`` and add these lines::

     export DJANGO_SETTINGS_MODULE=rylviach.settings.dev
     export PYTHONPATH=$PYTHONPATH:[path to repo]/rylviach_site

3. Install the requirements with ``pip install -r requirements/dev.txt``

``pyvenv``
^^^^^^^^^^
Silvio will fill this out

Set up database
---------------
TODO - Settings changes and superuser setup

Run development server
----------------------
You should now be able to run the basic site with ``django-admin runserver``
