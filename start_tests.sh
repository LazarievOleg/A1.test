#!/bin/bash
docker-compose run e2e-test  

TEST_EXIT_CODE=$?

echo "Exit code is $TEST_EXIT_CODE"
if [[ $TEST_EXIT_CODE -eq 0 ]]; then
    echo "Tests e2e stil work!"
else
    echo " fix me please!"
fi

./clean.sh

exit $TEST_EXIT_CODE

# $TEST_EXIT_CODE  uses to say Travis that build with tests is failed or not
