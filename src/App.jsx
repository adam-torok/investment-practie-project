import { useState } from "react";
import Header from "./components/Header"
import Input from "./components/Input"
import Table from "./components/Table"
import { calculateInvestmentResults } from "./utils/invesment";

const initialValues = [
    {
        label: 'Initial investment',
        name: 'initial',
        value: 0,
    },
    {
        label: 'Annual investment',
        name: 'annual',
        value: 0,
    },
    {
        label: 'Expected return',
        name: 'expected',
        value: 0,
    },
    {
        label: 'Duration',
        name: 'duration',
        value: 0,
    }
]

let annualData = [];

function App() {
    const [values, setValues] = useState(initialValues);

    const [initial, annual, expected, duration] = values;

    const theData = {
        initialInvestment: initial.value,
        annualInvestment: annual.value,
        expectedReturn: expected.value,
        duration: duration.value
    }

    annualData = calculateInvestmentResults(theData);

    function handleInputChange(e, name) {
        setValues((prevValues) => {
            const newValues = [...prevValues];
            newValues.find(item => item.name == name).value = +e.target.value
            return newValues;
        });
    }

    return (
        <main>
            <Header />
            <div id="user-input">
                {values.map(item => <Input onInputChange={(e) => { handleInputChange(e, item.name) }} key={item.label} name={item.name} label={item.label} />)}
            </div>
            <Table data={annualData} />
        </main>
    )
}

export default App