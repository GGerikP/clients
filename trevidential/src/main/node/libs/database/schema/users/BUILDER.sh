
# *******************************************************
#
# File: users/BUILDER.sql
# Auth: Gerk Peterson
# Desc: Script for rebuilding the trevidential statements schema from source
#
# *******************************************************

database=trevidential
db_src_dir=/home/gpeterso/repos/git/clients/trevidential/src/main/node/libs/database/schema

# --------------------------------------------------------
# Build the statements schema
# --------------------------------------------------------
echo "---> users/users.sql"
mysql $database < $db_src_dir/users/users.sql

# --------------------------------------------------------
echo "End: users/BUILDER.sql"
# --------------------------------------------------------
