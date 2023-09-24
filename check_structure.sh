#!/bin/bash

# Check if index.html exists
if [ ! -f index.html ]; then
  echo "Error: index.html not found!"
  exit 1
fi

# Check if Dockerfile exists
if [ ! -f Dockerfile ]; then
  echo "Error: Dockerfile not found!"
  exit 1
fi

# Check if css directory exists
if [ ! -d css ]; then
  echo "Error: css directory not found!"
  exit 1
fi

# Check if style.css exists within css directory
if [ ! -f css/style.css ]; then
  echo "Error: style.css not found in css directory!"
  exit 1
fi

# Check if javascript directory exists
if [ ! -d javascript ]; then
  echo "Error: javascript directory not found!"
  exit 1
fi

# Check if main.js exists within javascript directory
if [ ! -f javascript/main.js ]; then
  echo "Error: main.js not found in javascript directory!"
  exit 1
fi

# Check if images directory exists
if [ ! -d images ]; then
  echo "Error: images directory not found!"
  exit 1
fi

# Check if favicon-cloud.jpg exists within images directory
if [ ! -f images/favicon-cloud.png ]; then
  echo "Error: favicon-cloud.jpg not found in images directory!"
  exit 1
fi

echo "Repository structure is valid."
