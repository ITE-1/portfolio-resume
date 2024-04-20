import { useState } from 'react';
import '../components/steps.scss';

const messages = [
    'Learn React',
    'Apply for jobs',
    'Invest your new income'
];

export const Steps = () => {
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(false);
    
    const handleClickNext = () => {
        if (step < 3) setStep(step + 1);
    }
    const handleClickPrevious = () => {
        
        if (step > 1) setStep(step - 1);

    }

    return (
        <div>
            <button 
                className='btn'
                onClick={() => setIsOpen((e) =>!e )}>X</button>
            {
                isOpen 
                    &&
                    (<div className="steps">
                    <div className='steps__row'>
                       <span className={`steps__row__counter ${step >= 1 ? 'active' : ''}`}>1</span>
                       <span className={`steps__row__counter ${step >= 2 ? 'active' : ''}`}>2</span>
                       <span className={`steps__row__counter ${step >= 3 ? 'active' : ''}`}>3</span>
                    </div>
                    <div className='steps__dscr'>
                        <div>Step - {step}: {messages[step - 1]}</div>
                    </div>
                    <div className='steps__btns'>
                        <button onClick={() => handleClickPrevious()}>Previous</button>
                        <button onClick={() => handleClickNext()}>Next</button>
                    </div>
                    
                    </div>)
                    
            }
            
        </div>
        
    )
}

