'use client'

function Card({image,title,body,action}) {
  return (
  <div>

<div className="card w-auto bg-base-100 shadow-xl">
<figure><img className='g w-full bg-contain' src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{body}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">{action}</button>
    </div>
  </div>
</div>


  </div>
  )
}

export default Card