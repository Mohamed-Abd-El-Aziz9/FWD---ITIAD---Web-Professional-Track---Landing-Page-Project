

// creatNewSection() is a Self invoked function that add new section immediately to the web page when the program run.

let sectionNubers = 5;
let sectionCount = 0;
for (let i = 1; i <=sectionNubers; i++) {
    (function () {
        sectionCount++; // every time we call the function the numeber (number of section) will increase by one

        //define content section
        const sectionContent = `<section id="section${sectionCount}" data-nav="Section ${sectionCount}">
        <div class="landing__container">
        <h2>Section ${sectionCount}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
        
        <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
        </div>
        </section>`;

        /* Add the content in the end of main tag , its quite similar to append() function 
        but i like to use insertAdjacentHTML() to take more control of where i want to add the content*/
        document.querySelector("main").insertAdjacentHTML("beforeend", sectionContent);
    })();
}


//====================================================================================================


// here the function of making a new Listed item that add to unorderd list which have a class callednavbar in Html code

const NavigationBar = document.getElementById("navbar__list");
function createNewNavItem() {
    NavigationBar.innerHTML = "";
    document.querySelectorAll("section").forEach((section) => {
        const newListItem = `<li><a href="#${section.id}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a></li>`;
        NavigationBar.insertAdjacentHTML("beforeend", newListItem);
    });
};


//====================================================================================================


function sectionObserving() {
    const observe = new IntersectionObserver(
        function (Enteries) {
            Enteries.forEach((Enter) => {
                console.log(Enter)
                let activeLink = NavigationBar.querySelector(`[data-nav=${Enter.target.id}]`);
                if (Enter.isIntersecting) {
                    Enter.target.classList.add("your-active-class");
                    activeLink.classList.add("active-link");

                }
                else {
                    location.hash = `${Enter.target.id}`;


                    Enter.target.classList.remove("your-active-class");
                    activeLink.classList.remove("active-link");
                }

            });
        },
        {
            threshold: .9

        }

    );

    return document.querySelectorAll("section").forEach((section) => {
        observe.observe(section);
    });

}

createNewNavItem();
sectionObserving();






