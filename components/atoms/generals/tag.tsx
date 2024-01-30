interface TagType{
    name:String
}

export default function Tag({name}:TagType){
return (<div className="font-vazir text-dark text-md ">{name}</div>)
}