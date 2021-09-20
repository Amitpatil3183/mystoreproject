f:
cd MyStore

mvn clean test -Dcucumber.options="/MyStore/src/test/resources/FeatureCollections -t @SmokeTest"
