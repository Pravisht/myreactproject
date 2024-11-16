
export default function LoginPage() {
    return (<div className='outer-div'>
            <form className="row g-3">
            <div className="mb-1 row" style={{padding:12+"px"}}>
            <label className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
            <input type="text" id="email"></input>
            </div>
            </div>
            <div className="mb-1 row">
            <label className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
            <input type="password"  id="inputPassword"></input>
            </div>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Login</button>
                {/* <a href={`/contacts/1`}>Your Name</a> */}
            </div>
            </form>
            </div>);
}