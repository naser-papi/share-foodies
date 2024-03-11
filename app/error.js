"use client"
const Error = ({error}) => {
    console.log("error: ",error);
    return (
        <main className={"error"}>
            <h1>An error occurred!!!</h1>
            <p>see the console fo details</p>
        </main>
    );
};

export default Error;