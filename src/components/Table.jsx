import { formatter } from "../utils/invesment";

const tableHeaders = [
    'Year',
    'Investment Value',
    'Interest (Year)',
    'Total interest',
];

export default function Table({ data }) {
    return (
        <>
            <table id="result">
                <thead>
                    <tr>
                        {tableHeaders.map(item => <td key={item}>{item}</td>)}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.year}>
                            <td>{item.year}</td>
                            <td>{formatter.format(item.valueEndOfYear)}</td>
                            <td>{formatter.format(item.interest)}</td>
                            <td>{formatter.format(item.annualInvestment)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}