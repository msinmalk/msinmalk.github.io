#!/bin/bash

# this script writes html output for names of files in a directory



# set the directory to be searched
dir=${1:-../static/images}

# set the output file
outfile=${2:-../static/images.html}

# loop through the files in the directory
for file in $(ls $dir); do
    title=$(echo $file | sed 's/\..*//')
    echo "<li><span class="title">$title</span></li>"$'\n'"<img src=\"${1:-./static/images}/$file\" alt=\"$file\" style=\"max-width: 60%;\"/>" >> $outfile
done

exit 0

The script takes two arguments, the first is the directory to be searched, the second is the output file. The script loops through the files in the directory and writes the html output to the output file. The script can be run from the command line like this:

./script.sh ./static/images ./static/images.html

