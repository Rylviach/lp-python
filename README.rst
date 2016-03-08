
Rylviach Site
=============
Python/Django Implementation

Development Setup
-----------------

Install project
^^^^^^^^^^^^^^^

``virtualenvwrapper``
~~~~~~~~~~~~~~~~~~~~~
These instructions assume that you have already set up ``virtualenv`` and ``virtualenvwrapper``.

1. Create a new project with Python 3 with ``mkproject -p `which python3` rylviach_site``
2. Edit your ``.virtualenv/rylviach_site/bin/postactivate.sh`` and add these lines

.. code-block:: bash

   export DJANGO_SETTINGS_MODULE=rylviach.settings.dev
   export PYTHONPATH=$PYTHONPATH:[path to repo]/rylviach_site

3. Install the requirements with ``pip install -r requirements/dev.txt``

``pyvenv``
~~~~~~~~~~
**TODO** - Silvio will fill this out

Set up database
^^^^^^^^^^^^^^^
**TODO** - Settings changes and superuser setup

Run development server
^^^^^^^^^^^^^^^^^^^^^^
You should now be able to run the basic site with ``django-admin runserver``
**TODO** - Do you need to manually set env vars or specify a settings file with ``--settings`` or use ``--path`` when using ``pyvenv``?

Site Features and Roadmap
-------------------------

Landing Page
^^^^^^^^^^^^
This will be a pretty basic page. It will set up the navigation and project framework. Currently in progress.

Blog
^^^^
We will chronical our epic learning journey here, along with any other tidbits we find useful.

Continuous Integration
^^^^^^^^^^^^^^^^^^^^^^
We will use at least one CI service. Possibly more than one and do some comparisons. Expect to see findings in the blog!

About Us
^^^^^^^^
This one should be pretty simple.

Contact Us
^^^^^^^^^^
We'll see how setting up emailing goes.

GitHub Tracker
^^^^^^^^^^^^^^
This will track/link to our GitHub repos. Depending on whether the user is logged and an whether that user is an admin, it may show extra information, such as latest commits. Not that it would be publicly available on our repo, but it should be some good learning.

Insult (or something else) API
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
This is mostly going to be an excuse to play with Django-Rest-Framework.

License
-------
Please see `LICENSE <https://github.com/Rylviach/lp-python/blob/master/LICENSE.txt>`_.
