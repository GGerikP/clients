# *******************************************************
#
# File: BUILDER-DROP-AND-REBUILD.sh
# Auth: Gerk Peterson
# Desc: Script for rebuilding the database from schema scripts
#
# *******************************************************

# --------------------------------------------------------
echo "Running: BUILDER-DROP-AND-REBUILD.sh"
# --------------------------------------------------------

#if [ "$#" gt 0 ]

#for var in "$@"
#do
#    echo "$var"
#done

database=trevidential
db_src_dir=/home/gpeterso/repos/git/clients/trevidential/src/main/node/libs/database/schema

# --------------------------------------------------------
# Drop and rebuild the db
# --------------------------------------------------------
sql="DROP DATABASE IF EXISTS $database;"
echo "$sql"
mysql -e "$sql"

sql="CREATE DATABASE $database;"
echo "$sql"
mysql -e "$sql"

# --------------------------------------------------------
# Build the New schema
# --------------------------------------------------------
echo "START: BUILDER.sh"
. $db_src_dir/BUILDER.sh

# --------------------------------------------------------
echo "***END - BUILDER-DROP-AND-REBUILD.sh***"
# --------------------------------------------------------
