import Link from "next/link";

const RegisterSuccessPage = () => {
    return (
        <div className="overlay">
            <div className="flex flex-col justify-center items-center gap-12 h-screen text-center">
                <h1>CONGRATS, YOUR REGISTRATION HAS BEEN SUCCESSFUL</h1>
                <h2 className="text-2xl">Go back to the <Link href="/" className="hover text-3xl"><span>{">"}Home{"<"}</span></Link> page</h2>
                <h3 className="text-4xl">~~Enjoy~~</h3>
            </div>
        </div>
    )
}

export default RegisterSuccessPage