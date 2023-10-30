document.addEventListener('DOMContentLoaded', function () {
    const gradeFilter = document.getElementById('grade-filter');
    const strandFilter = document.getElementById('strand-filter');
    const sessionFilter = document.getElementById('session-filter');
    const courseList = document.querySelectorAll('.course');

    gradeFilter.addEventListener('change', filterCourses);
    strandFilter.addEventListener('change', filterCourses);
    sessionFilter.addEventListener('change', filterCourses);

    function filterCourses() {
        const selectedGrade = gradeFilter.value;
        const selectedStrand = strandFilter.value;
        const selectedSession = sessionFilter.value;

        courseList.forEach(course => {
            const courseGrade = course.getAttribute('data-grade').split(',').map(grade => grade.trim());
            const courseStrand = course.getAttribute('data-strand');
            const courseSession = course.getAttribute('data-session');

            const gradeMatch = selectedGrade === 'all' || selectedGrade.includes(selectedGrade);
            const strandMatch = selectedStrand === 'all' || selectedStrand === courseStrand;
            const sessionMatch = selectedSession === 'all' || selectedSession === courseSession;

            if (gradeMatch && strandMatch && sessionMatch) {
                course.style.display = 'block';
            } else {
                course.style.display = 'none';
            }
        });
    }
});
