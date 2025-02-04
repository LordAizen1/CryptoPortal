import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Clock, Users, Star } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Applied Cryptography",
    description: "Learn the fundamentals of modern cryptography and its practical applications.",
    instructor: "Dr. Sarah Johnson",
    duration: "16 weeks",
    students: 120,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 2,
    title: "Topics in Cryptanalysis",
    description: "Advanced course covering modern cryptanalysis techniques and attack methods.",
    instructor: "Prof. Michael Chen",
    duration: "12 weeks",
    students: 85,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000",
  },
];

export default function Courses() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="space-y-8"
    >
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          className="text-4xl font-bold text-white mb-4"
        >
          Cryptography Courses
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.3 }}
          className="text-[rgb(224,204,250)] text-lg"
        >
          Explore our comprehensive cryptography curriculum designed for IIIT Delhi students.
        </motion.p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#23262d] rounded-lg overflow-hidden border border-[rgb(136,58,234)] hover:border-[rgb(224,204,250)] transition-all duration-300 shadow-lg"
          >
            <div className="h-48 overflow-hidden">
              <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{course.title}</h3>
              <p className="text-[rgb(224,204,250)] mb-4">{course.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center text-white">
                  <Users className="h-5 w-5 mr-2 text-[rgb(136,58,234)]" />
                  <span>{course.students} Students</span>
                </div>
                <div className="flex items-center text-white">
                  <Clock className="h-5 w-5 mr-2 text-[rgb(136,58,234)]" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center text-white">
                  <BookOpen className="h-5 w-5 mr-2 text-[rgb(136,58,234)]" />
                  <span>{course.instructor}</span>
                </div>
                <div className="flex items-center text-white">
                  <Star className="h-5 w-5 mr-2 text-[rgb(136,58,234)]" />
                  <span>{course.rating}/5.0</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-[rgb(136,58,234)] text-white py-2 px-4 rounded-md hover:bg-[rgb(49,10,101)] transition-colors duration-300"
              >
                View Course Details
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.4 }}
        className="bg-[rgba(49,10,101,0.2)] rounded-lg p-6 mt-8"
      >
        <h2 className="text-2xl font-bold text-white mb-4">Course Registration</h2>
        <p className="text-[rgb(224,204,250)] mb-4">
          Course registration is currently open for the upcoming semester. Please contact your academic advisor for enrollment details and prerequisites.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[rgb(136,58,234)] text-white py-2 px-4 rounded-md hover:bg-[rgb(49,10,101)] transition-colors duration-300"
        >
          Contact Academic Advisor
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
