REGION=us-east-1
export DB_USER=`aws ssm get-parameter --name crf.db.user --region $REGION | jq -r .Parameter.Value`
export DB_PASS=`aws ssm get-parameter --name crf.db.pass --with-decryption --region $REGION | jq -r .Parameter.Value`
export DB_HOST=`aws ssm get-parameter --name crf.db.writer --region $REGION | jq -r .Parameter.Value`
export DB_NAME=postgres
