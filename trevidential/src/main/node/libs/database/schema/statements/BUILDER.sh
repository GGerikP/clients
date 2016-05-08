
# *******************************************************
#
# File: statements/BUILDER.sh
# Auth: Gerk Peterson
# Desc: Script for rebuilding the trevidential statements schema from source
#
# *******************************************************

database=trevidential
db_src_dir=/home/gpeterso/repos/git/clients/trevidential/src/main/node/libs/database/schema

# --------------------------------------------------------
echo "BEGIN: statements/BUILDER.sh"
# --------------------------------------------------------

# --------------------------------------------------------
# Build the statements schema
# --------------------------------------------------------
echo "---> statements/statementtypes.sql"
mysql $database < $db_src_dir/statements/statementtypes.sql
echo "---> statements/statementtypes.dat"
mysql $database --show-warnings --local-infile -e "LOAD DATA LOCAL INFILE '$db_src_dir/statements/statementtypes.dat' INTO TABLE statementtypes FIELDS TERMINATED BY '|';"

echo "---> statements/supporttypes.sql"
mysql $database < $db_src_dir/statements/supporttypes.sql
echo "---> statements/supporttypes.dat"
mysql $database --show-warnings --local-infile -e "LOAD DATA LOCAL INFILE '$db_src_dir/statements/supporttypes.dat' INTO TABLE supporttypes FIELDS TERMINATED BY '|';"

echo "---> statements/statementquantifiers.sql"
mysql $database < $db_src_dir/statements/statementquantifiers.sql
echo "---> statements/statementquantifiers.dat"
mysql $database --show-warnings --local-infile -e "LOAD DATA LOCAL INFILE '$db_src_dir/statements/statementquantifiers.dat' INTO TABLE statementquantifiers FIELDS TERMINATED BY '|';"

echo "---> statements/statements.sql"
mysql $database < $db_src_dir/statements/statements.sql
echo "---> statements/statements.dat"
mysql $database --show-warnings --local-infile -e "LOAD DATA LOCAL INFILE '$db_src_dir/statements/statements.dat' INTO TABLE statements FIELDS TERMINATED BY '|';"

echo "---> statements/statementsupportmap.sql"
mysql $database < $db_src_dir/statements/statementsupportmap.sql

echo "---> statements/usersupportmap.sql"
mysql $database < $db_src_dir/statements/usersupportmap.sql

# --------------------------------------------------------
echo "END: statements/BUILDER.sh"
# --------------------------------------------------------
