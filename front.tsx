//  * Create a form that accepts:
// 
//         * Transaction Amount(number)
//     * Transaction Description(text)
// display the created transaction
// 

export interface ItransactionFormProps {
    Amount: number;
    Description: string;
}

export const TransactionForm = (props: ItransactionFormProps) => {

    const [formState, setFormState] = useState({amount: 0, description: ""});
    const [resultState, setResultState] = useState({amount: 0, description: ""});
    const serverActionRequest = async (transactionId: string) => {
        try {
            const response = await axios.post('/api/transactions', { ...props })
                .then(d => ({ success: true, data: d.data, msg: "success" }))
                .catch((error) => {
                    Notification.push(error?.message);
                    return {
                        success: false,
                        data: undefined,
                        msg: error?.message
                    };
                })
            return response;
        } catch (error) {
            return {
                success: false,
                data: undefined,
                msg: error?.message
            };
        }
    }

    const handleSubmit = () => {
       const response = serverActionRequest(formState);
       if(!response.success){

       }
       setResultState({amount: response.amount, description: response.description})
    }



    return (
        <div>
            <form action={serverActionRequest}>
                <label>Amount:</label>
                <input type="number" placeholder="amount" value={amount} onChange={() => {
                    setFormState(prev => ({amount, description: formState.description}))
                }} />
                <textare placeholder="amount" onChange={() => {
                    setFormState(prev => ({amount, description: formState.description}))
                }}>
                    {formState.description}
                </textare>
            </form>
            <div>
                {resultState.amount}
                {resultState.description}
            </div/>
        </div>
    );

}