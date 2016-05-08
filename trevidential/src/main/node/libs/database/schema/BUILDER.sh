
# *******************************************************
#
# File: BUILDER.sh
# Auth: Gerk Peterson
# Desc: Script for rebuilding the trevidential schema from source
#
# *******************************************************

database=trevidential
db_src_dir=/home/gpeterso/repos/git/clients/trevidential/src/main/node/libs/database/schema

# --------------------------------------------------------
# Build the Database
# --------------------------------------------------------
echo "START: users/BUILDER.sh"
. $db_src_dir/users/BUILDER.sh

echo "START: statements/BUILDER.sh"
. $db_src_dir/statements/BUILDER.sh

# --------------------------------------------------------
echo "***END - BUILDER.sh***"
# --------------------------------------------------------
