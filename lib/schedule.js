const weekSchedule = [
    {
        dayName: 'sunday',
        lessons: []
    },
    {
        dayName: 'mondey',
        lessons: [
            {
                name: 'Math',
                auditory: 212,
                teacher: 'Dan Abramov'
            },
            {
                name: 'Geometry',
                auditory: 212,
                teacher: 'Dan Abramov'
            }
        ]
    },
    {
        dayName: 'tuesday',
        lessons: [
            {
                name: 'Physics',
                auditory: 102,
                teacher: 'Dean Azimbaev'
            },
            {
                name: 'English',
                auditory: 512,
                teacher: 'Samara Isaevna'
            }
        ]
    },
    {
        dayName: 'wednesday',
        lessons: [
            {
                name: 'Web development',
                auditory: 102,
                teacher: 'Dean Azimbaev'
            }
        ]
    },
    {
        dayName: 'thursday',
        lessons: [
            {
                name: 'Web development',
                auditory: 102,
                teacher: 'Dean Azimbaev'
            }
        ]
    },
    {
        dayName: 'friday',
        lessons: [
            {
                name: 'Web development',
                auditory: 102,
                teacher: 'Dean Azimbaev'
            }
        ]
    },
];

exports.getTodaySchedule = function() {
    const today = new Date();
    const dayNumber = today.getDay(); // 2

    const todaySchedule = weekSchedule[dayNumber];

    console.log(todaySchedule);

    const scheduleString = `
    День: ${todaySchedule.dayName} 🥳

    Занятия:
        ${todaySchedule.lessons.map(lesson => {
            return `\n${lesson.name}, аудитория ${lesson.auditory}, ${lesson.teacher}`;
        })}`;

    return scheduleString;
}
