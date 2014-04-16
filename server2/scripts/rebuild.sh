mkdir -p groonga/db
rm -fr groonga/db/*
groonga -n groonga/db/test.db quit
groonga groonga/db/test.db < groonga/schema.grn
groonga groonga/db/test.db < groonga/data.grn
groonga -s --port 10041 --protocol http groonga/db/test.db --log-level 8
