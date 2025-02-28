function App() {

    return (
        <>

            <div className="w-screen h-screen flex flex-col items-center justify-center">
                <div className="w-1/3 p-7 flex flex-col items-center justify-center border rounded-lg border-gray-500">

                    <fieldset className="fieldset w-2/3">
                        <legend className="fieldset-legend">First Name</legend>
                        <input type="text" className="input w-full outline-none focus:ring-0 focus:outline-none"
                               placeholder="Chames"/>
                    </fieldset>

                    <fieldset className="fieldset w-2/3">
                        <legend className="fieldset-legend">Last Name</legend>
                        <input type="text" className="input w-full outline-none focus:ring-0 focus:outline-none"
                               placeholder="Dinuka"/>
                    </fieldset>

                    <fieldset className="fieldset w-2/3">
                        <legend className="fieldset-legend">Gender</legend>
                        <select className="select w-full outline-none focus:ring-0 focus:outline-none">
                            <option disabled selected>Select Your Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Prefer not to say</option>
                        </select>
                    </fieldset>

                    <fieldset className="fieldset w-2/3">
                        <legend className="fieldset-legend">Birth of Date</legend>
                        <input type="date" className="input w-full outline-none focus:ring-0 focus:outline-none"
                               placeholder="Dinuka"/>
                    </fieldset>

                    <fieldset className="fieldset w-2/3 pb-4">
                        <legend className="fieldset-legend">Your response</legend>
                        <textarea className="textarea h-24 outline-none focus:ring-0 focus:outline-none"
                                  placeholder="Response"></textarea>
                    </fieldset>

                    <button className="btn btn-block w-2/3 bg-primary">Submit</button>


                </div>
            </div>

        </>
    );
}

export default App;