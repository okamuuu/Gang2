mkdir -p /tmp/groonga/db
rm -fr /tmp/groonga/db/*
groonga -n /tmp/groonga/db/test.db quit
groonga /tmp/groonga/db/test.db < groonga/schema.grn
groonga /tmp/groonga/db/test.db < groonga/data.grn
groonga -d --port 10041 --protocol http /tmp/groonga/db/test.db --log-level 8 --query-log-path
