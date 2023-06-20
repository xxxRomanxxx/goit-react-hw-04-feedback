
import css from './App.module.css';
import Statics from "./Statics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Notification from "./Notification";
import { useState } from 'react';


const App = () => {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

   const handleClick = (option) => {
    switch (option) {
      case 'good': 
        setGood(good + 1)
        break;

        case 'neutral':
        setNeutral(neutral + 1)
        break;

        case 'bad': 
        setBad(bad + 1)
        break;
    
      default:
        break;
    }
    };

   const countTotalFeedback = () => {
        return good + neutral + bad;
    }

   const countPositiveFeedbackPercentage = () => {

      const total = countTotalFeedback();
      return (Math.round(good * 100 / total)); 
    }

      const total = countTotalFeedback();
      const positiveFeedback = countPositiveFeedbackPercentage();

        return  (
        <div className={css.feedback}>
          <Section title="Pleace leave feedback">
            <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={handleClick} />
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


export default App;
