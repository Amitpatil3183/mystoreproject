package MyStore.StepDefinitions;


import org.junit.runner.RunWith; 
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
    monochrome = true,
    features = "@target/rerun.txt", //Cucumber picks the failed scenarios from this file 
    plugin = {"pretty", "html:target/site/cucumber-pretty",
            "json:target/cucumber.json"}
  )

public class FailedScenarios {

}
