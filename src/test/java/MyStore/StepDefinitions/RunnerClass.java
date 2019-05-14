package MyStore.StepDefinitions;

import org.junit.runner.RunWith; 
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		monochrome=true, 
		plugin = {"pretty", "html:target/cucumber"},
		features = { "src/test/resources/FeatureCollections/" },
		tags = { "@SmokeTest" }
//		dryRun = true
		)

public class RunnerClass {

}
