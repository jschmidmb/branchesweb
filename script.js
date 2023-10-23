document.addEventListener('DOMContentLoaded', function () {
    const ageFilter = document.getElementById('grade-filter');
    const strandFilter = document.getElementById('strand-filter');
    const courseList = document.querySelectorAll('.course');

    ageFilter.addEventListener('change', filterCourses);
    strandFilter.addEventListener('change', filterCourses);

    function filterCourses() {
        const selectedAge = ageFilter.value;
        const selectedStrand = strandFilter.value;

        courseList.forEach(course => {
            const courseAge = course.getAttribute('data-grade');
            const courseStrand = course.getAttribute('data-strand');

            if ((selectedAge === 'all' || selectedAge === courseAge) &&
                (selectedStrand === 'all' || selectedStrand === courseStrand)) {
                course.style.display = 'block';
            } else {
                course.style.display = 'none';
            }
        });
    }
});
