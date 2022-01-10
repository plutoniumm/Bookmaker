rand="$(openssl rand -hex 4)"; # Random Hex of Len 8
date="$(date +'%Y-%m-%d')"; # Date in YYYY-MM-DD format

# Basics
base="layout: post\n";
image="image_type: \nequation:\n"

# Make File
file_name="$date-$rand.md";
echo "Creating $file_name";
touch $file_name;

# Read & Set Data
read -p "Area: [Number Theory] " area;
field="${area:="Number Theory"}";
read -p "Title:  " title;

meta="area: $field\n";
titles="small_title: \ntitle: $title\ndescription: \n";

# Write File
echo "---\n$base$titles$meta$image---\n\n# H1" >> $file_name;
mv $file_name ./_drafts/$file_name;

echo "Successfully Created $title at $rand";