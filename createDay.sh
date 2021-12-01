#!/usr/bin/env bash

day=$1

deno run --allow-read --allow-write --allow-net ./getInput.ts ${day}