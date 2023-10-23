document.addEventListener('DOMContentLoaded', function () {
    const ageFilter = document.getElementById('grade-filter');
    const strandFilter = document.getElementById('strand-filter');
    const courseList = document.querySelectorAll('.course');
    const sessionFilter = document.querySelectorAll('.session');

    ageFilter.addEventListener('change', filterCourses);
    strandFilter.addEventListener('change', filterCourses);
    sessionFilter.addEventListener('change', filterCourses);

    function filterCourses() {
        const selectedAge = ageFilter.value;
        const selectedStrand = strandFilter.value;
        const selectedSession = sessionFilter.value;

        courseList.forEach(course => {
            const courseAge = course.getAttribute('data-grade');
            const courseStrand = course.getAttribute('data-strand');
            const courseSession = course.getAttribute('data-session');

            if ((selectedAge === 'all' || selectedAge === courseAge) &&
                (selectedStrand === 'all' || selectedStrand === courseStrand)) &&
                (selectedSession === 'all' || selectedSession === courseSession)) {
                course.style.display = 'block';
            } else {
                course.style.display = 'none';
            }
        });
    }
});
