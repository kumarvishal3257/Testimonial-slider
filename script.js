const testimonialsContainer = document.querySelector('.testimonial-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')


const testimonials = [
    {
        name: "Rahul Kumar",
        position: 'Marketing',
        photo: 'https://images.unsplash.com/photo-1508341591423-4347099e1f19?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        text: "I've worked with hundreds of developers and I have to say the top Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ad omnis expedita ea, corporis consectetur laboriosam vel consequatur temporibus, dolor vitae non nobis in at ut, impedit atque nemo voluptate quisquam vero officiis odio. Dolore."
    },
    {
        name: "Ranjan Kumar",
        position: 'Software Engineer',
        photo: 'https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        text: "I've worked with hundreds of developers and I have to say the top Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ad omnis expedita ea, corporis consectetur laboriosam vel consequatur temporibus, dolor vitae non nobis in at ut, impedit atque nemo voluptate quisquam vero officiis odio. Dolore."
    },
    {
        name: "Hrithik Kumar",
        position: 'Frontend Developer',
        photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        text: "I've worked with hundreds of developers and I have to say the top Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ad omnis expedita ea, corporis consectetur laboriosam vel consequatur temporibus, dolor vitae non nobis in at ut, impedit atque nemo voluptate quisquam vero officiis odio. Dolore."
    },

]

let idx = 1

function updateTestimonial() {
    const { name, position, photo, text } = testimonials[idx]

    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML = name
    role.innerHTML = position

    idx++

    if(idx > testimonials.length - 1) {
        idx=0
    }
}

setInterval(updateTestimonial, 5000)