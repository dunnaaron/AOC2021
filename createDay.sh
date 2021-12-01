#!/usr/bin/env bash

year=$1
day=$2

deno run --allow-read --allow-write --allow-net ./getInput.js ${year} ${day}