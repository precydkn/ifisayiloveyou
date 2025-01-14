//==========LYRICS===========
function Lyrics() {
    const lyricsSpans = document.querySelectorAll('.full-lyrics'); // select all spans with the class 'full-lyrics'

    // add mousemove/mouseleav functions to each span
    lyricsSpans.forEach(span => {
        span.addEventListener('mousemove', (event) => toEnglish(event, span));
        span.addEventListener('mouseleave', toKorean);
    });
// tooltip func for floating lyrics translation
function toEnglish(event, l) {
    // creating tooltip
    let tooltip = document.querySelector('#tooltip');
    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.id = 'tooltip';
        tooltip.style.position = 'absolute';
        tooltip.style.padding = '10px';
        tooltip.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        tooltip.style.color = '#fff';
        tooltip.style.borderRadius = '8px';
        tooltip.style.fontSize = '26px';
        tooltip.style.pointerEvents = 'none';
        tooltip.style.zIndex = '1000';
        document.body.appendChild(tooltip);
    }

    // Set the tooltip content based on the hovered element's ID
    let engText;
    switch (l.id) {
        case 'l1':
            engText = `
            This is just what I’m like ever since that day<br>
            Can’t even pick up the guitar anymore<br>
            Yeah, it’s just what I’m like ever since that day<br>
            It’s funny but
            `;
            break;

        case 'l2':
            engText = `
            Dirty laundry's overflowing in the washer<br>
            Hair's sticking up, it's a mess<br>
            Outside's bustling, even cherry blossoms look busy but not me<br>
            It's just pathetic
            `;
            break;

        case 'l3':
            engText = `
            It's just pathetic<br>
            Yeah, I've got it bad<br>
            It's not like tomorrow<br>
            I'll wake up as a brand new person<br>
            And to use my memories<br>
            To write another song<br>
            There's nothing I hate more than that
            `;
            break;

        case 'l4':
            engText = `
            This is just what I'm like ever since that day<br>
            Can't even pick up the guitar anymore<br>
            Yeah, it's just what I'm like ever since that day<br>
            It's funny but<br>
            If I say I love you I love you I love you just for today<br>
            Knowing I'd regret it, would it be better that way?<br>
            Love you
            `;
            break;

        case 'l6':
            engText = `
            Wanna tell ya<br>
            I could fake the inspiration<br>
            And write a lyric that's so cliché but<br>
            In the end, it all comes back to you<br>
            So sick of being sober<br>
            Pretending this isn't a song about you<br>
            I'll just keep on living like that, today, tomorrow, on and on<br>
            But I'm so sick of it
            `;
            break;

        case 'l7':
            engText = `
            And to use my memories<br>
            To write another song<br>
            There’s nothing I hate more than that
            `;
            break;

        case 'l8':
            engText = `
            This is just what I'm like ever since that day<br>
            Can't even pick up the guitar anymore<br>
            Yeah, it's just what I'm like ever since that day<br>
            It's funny but<br>
            If I say I love you I love you I love you just for today<br>
            Knowing I'd regret it, would it be better that way?<br>
            Love you
            `;
            break;

        case 'l9':
            engText = `
            To be honest, music is nothing but<br>
            One big emotional black hole<br>
            Writing songs, playing guitar, it all feels meaningless<br>
            Like I'm forcing a feeling, it all feels phony<br>
            So I'm done<br>
            What’s it matter anyway
            `;
            break;

        case 'l10':
            engText = `
            (I love you)<br>
            Dum dum dum yeah<br>
            (I love you I love you)<br>
            Dum dum dum yeah<br>
            `;
            break;

        default:
            engText = null;
    }

    if (engText == null) tooltip.style.display = none;
    else tooltip.innerHTML = engText;

    // tooltip position following mouse
    tooltip.style.left = `${event.pageX + 10}px`;
    tooltip.style.top = `${event.pageY + 10}px`;
    tooltip.style.display = 'block';
}

// func to hide tooltip on mouse leave
function toKorean() {
    const tooltip = document.querySelector('#tooltip');
    if (tooltip) {
        tooltip.style.display = 'none';
    }
}
}

//===========CAROUSEL===========
function Carousel() {
    const slides = document.querySelectorAll('.carousel-slide'); //individual slides of carousel 1
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentSlideIndex = 0; //first slide

    //func to show current slide and hide others
    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }

    showSlide(currentSlideIndex); //show first slide initially

    //event listener for previous button
    prevBtn.addEventListener('click', function() {
        currentSlideIndex = (currentSlideIndex === 0) ? slides.length - 1 : currentSlideIndex - 1; //subtract 1 from slide length to access previous slide
        showSlide(currentSlideIndex); //pass current slide's index to func to display it
    });

    //event listener for next button
    nextBtn.addEventListener('click', function() {
        currentSlideIndex = (currentSlideIndex === slides.length - 1) ? 0 : currentSlideIndex + 1; //add 1 to slide length to access next slide
        showSlide(currentSlideIndex); //pass current slide's index to func to display it
    });
}


document.addEventListener("DOMContentLoaded", function() {
    Lyrics();
    Carousel();
});





/*document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section .part");
    const body = document.body;

    const observerOptions = {
        root: null, // Use the viewport as the root
        threshold: 0.05, // Trigger when 50% of the section is visible
    };

    const observerCallback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const backgroundColor = entry.target.dataset.background;
                body.style.backgroundColor = backgroundColor;
            }
        });
    };

    //*was removed from here

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => observer.observe(section));
});*/

//*
/*const observerCallback = (entries) => {
        let maxRatio = 0;
        let dominantSection = null;
    
        entries.forEach((entry) => {
            if (entry.intersectionRatio > maxRatio) {
                maxRatio = entry.intersectionRatio;
                dominantSection = entry;
            }
        });
    
        if (dominantSection && dominantSection.isIntersecting) {
            const backgroundColor = dominantSection.target.dataset.background;
            body.style.backgroundColor = backgroundColor;
        }
    };*/