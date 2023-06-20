import React, {Component} from "react";
import css from './App.module.css';
import Statics from "./Statics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Notification from "./Notification";


class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    handleClick = (option) => {
      this.setState(prevState => ({
        [option]: prevState[option] + 1,
      }));
    };


    countTotalFeedback = () => {
        const {good, neutral, bad} = this.state;
        return good + neutral + bad;
    }

    countPositiveFeedbackPercentage = () => {
      const {good} = this.state;
      const total = this.countTotalFeedback();
        return (Math.round(good * 100 / total)); 
    }

    render() {
      const {good, neutral, bad} = this.state;
      const total = this.countTotalFeedback();
      const positiveFeedback = this.countPositiveFeedbackPercentage();

        return  (
        <div className={css.feedback}>
          <Section title="Pleace leave feedback">
            <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleClick} />
          </Section>
          {total > 0 ? 
          <Section title='Statistics'>
          <Statics 
            onGood={good} 
            onNeutral={neutral} 
            onBad={bad} 
            onCountTotalFeedback={total} 
            onCountPositiveFeedbackPercentage={positiveFeedback}
            />
          </Section> : 
          <Notification message="There is no feedback"/>
          }
          
        </div>
        ) 
    }
}

export default App;
