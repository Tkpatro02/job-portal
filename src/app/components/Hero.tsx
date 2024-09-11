export default function Hero(){
    
    return(
        <section className="container py- my-12">
           <h1 className="text-4xl font-bold text-center py-10">
            Find your next <br/>Dream Job
           </h1>
           
           <form className="flex gap-2 mt-4 max-w-md mx-auto ">
            <input type="search" 
             className="border border-grey-400 w-full py-2 px-3 rounded-md"  
             placeholder="search phrase.."/>
             <button className="bg-blue-600 text-white py-2 px-3 rounded-md" >Search</button>
           </form>
           
        </section>
    )
}