file=$1
dir="${file%.*}"

# if not dir, exit
if [ ! -d "$dir" ]; then
  echo "Directory $dir does not exist"
  exit 1
fi
cd $dir

len=$(ls -1 *.txt 2>/dev/null | wc -l)
time_arr=(180)
echo "Found $len files"
for f in *.txt; do
  start=$(date +%s)
  name="${f%.*}"

  avg=$(echo ${time_arr[@]} | awk '{for(i=0;i<=NF;i++)sum+=$i}END{print sum/NF}')
  echo "Running on file $name/$len. Avg runtime: $avg"

  # this needs to be wrapped in a timer
  say -f $f -o $name.aiff

  rm $f
  end=$(date +%s)

  time_arr+=( $(($end - $start)) )
  echo "\033[1A"
done

# ask to add image
echo "Add image? (y/n)"
read answer
if [ "$answer" != "${answer#[Yy]}" ] ;then
  echo "Enter path:"
  read path

  for f in *.aiff; do
    echo "Adding image to $f"
    lame --ti $path $f
    rm $f
  done
fi

exit 0
