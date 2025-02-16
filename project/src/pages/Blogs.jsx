import React, { useState } from 'react';
import { Calendar, User, MessageSquare, Edit, Trash2, GripVertical, Plus, X } from 'lucide-react';

// Mock admin status - will be replaced with actual auth check
const isAdmin = true;

const initialBlogs = [
  {
    id: 1,
    title: 'Understanding Zero-Knowledge Proofs',
    content: 'Zero-knowledge proofs are cryptographic methods by which one party can prove to another party that a given statement is true...',
    author: 'Dr. Sarah Johnson',
    date: '2024-03-01',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000',
    tags: ['Cryptography', 'ZKP', 'Privacy'],
    comments: 12,
  },
  {
    id: 2,
    title: 'The Future of Post-Quantum Cryptography',
    content: 'As quantum computers continue to evolve, the need for quantum-resistant cryptographic algorithms becomes increasingly important...',
    author: 'Prof. Michael Chen',
    date: '2024-02-28',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000',
    tags: ['Quantum', 'Security', 'Research'],
    comments: 8,
  },
];

export default function Blog() {
  const [blogs, setBlogs] = useState(initialBlogs);
  const [isEditing, setIsEditing] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('text/plain', index);
    setIsDragging(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    const dragIndex = parseInt(e.dataTransfer.getData('text/plain'));
    const newBlogs = [...blogs];
    const [draggedBlog] = newBlogs.splice(dragIndex, 1);
    newBlogs.splice(dropIndex, 0, draggedBlog);
    setBlogs(newBlogs);
    setIsDragging(false);
  };

  const handleEdit = (blog) => {
    setEditingBlog(blog);
    setIsEditing(true);
  };

  const handleDelete = (blogId) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      setBlogs(blogs.filter(blog => blog.id !== blogId));
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Cryptography Blog</h1>
        <p className="text-[rgb(224,204,250)] text-lg">
          Latest insights, research, and developments in cryptography.
        </p>
        {isAdmin && (
          <button
            onClick={() => {
              setEditingBlog({
                id: Date.now(),
                title: '',
                content: '',
                author: '',
                date: new Date().toISOString().split('T')[0],
                image: '',
                tags: [],
                comments: 0,
              });
              setIsEditing(true);
            }}
            className="mt-4 inline-flex items-center bg-[rgb(136,58,234)] text-white px-4 py-2 rounded-md hover:bg-[rgb(49,10,101)] transition-colors duration-300"
          >
            <Plus className="h-5 w-5 mr-2" />
            New Blog Post
          </button>
        )}
      </div>

      <div className="grid gap-8">
        {blogs.map((blog, index) => (
          <div
            key={blog.id}
            draggable={isAdmin}
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
            className={`bg-[#23262d] rounded-lg overflow-hidden border border-[rgb(136,58,234)] hover:border-[rgb(224,204,250)] transition-all duration-300 ${
              isDragging ? 'cursor-move' : ''
            }`}
          >
            <div className="md:flex">
              <div className="md:w-1/3 relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-full w-full object-cover"
                />
                {isAdmin && (
                  <div className="absolute top-2 right-2 flex space-x-2">
                    <button
                      onClick={() => handleEdit(blog)}
                      className="p-2 bg-[rgb(136,58,234)] rounded-full text-white hover:bg-[rgb(49,10,101)] transition-colors duration-300"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(blog.id)}
                      className="p-2 bg-red-500 rounded-full text-white hover:bg-red-600 transition-colors duration-300"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                    <div className="p-2 bg-[rgb(136,58,234)] rounded-full text-white cursor-move">
                      <GripVertical className="h-4 w-4" />
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6 md:w-2/3">
                <h2 className="text-2xl font-bold text-white mb-2">{blog.title}</h2>
                <p className="text-[rgb(224,204,250)] mb-4">{blog.content}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-[rgb(49,10,101)] text-[rgb(224,204,250)] px-2 py-1 rounded-md text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-[rgb(224,204,250)]">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      {blog.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {blog.date}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    {blog.comments} Comments
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm" onClick={() => setIsEditing(false)}></div>
          <div className="relative min-h-screen flex items-center justify-center p-4">
            <div className="relative bg-[#23262d] rounded-lg max-w-2xl w-full p-6 border border-[rgb(136,58,234)]">
              <button
                onClick={() => setIsEditing(false)}
                className="absolute top-4 right-4 text-white hover:text-[rgb(224,204,250)]"
              >
                <X className="h-6 w-6" />
              </button>
              
              <h2 className="text-2xl font-bold text-white mb-6">
                {editingBlog.id ? 'Edit Blog Post' : 'New Blog Post'}
              </h2>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-[rgb(224,204,250)] mb-2">Title</label>
                  <input
                    type="text"
                    value={editingBlog.title}
                    onChange={(e) => setEditingBlog({...editingBlog, title: e.target.value})}
                    className="w-full bg-[#13151a] text-white rounded-md px-4 py-2 border border-[rgb(136,58,234)]"
                  />
                </div>
                
                <div>
                  <label className="block text-[rgb(224,204,250)] mb-2">Content</label>
                  <textarea
                    value={editingBlog.content}
                    onChange={(e) => setEditingBlog({...editingBlog, content: e.target.value})}
                    className="w-full bg-[#13151a] text-white rounded-md px-4 py-2 border border-[rgb(136,58,234)] h-32"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[rgb(224,204,250)] mb-2">Author</label>
                    <input
                      type="text"
                      value={editingBlog.author}
                      onChange={(e) => setEditingBlog({...editingBlog, author: e.target.value})}
                      className="w-full bg-[#13151a] text-white rounded-md px-4 py-2 border border-[rgb(136,58,234)]"
                    />
                  </div>
                  <div>
                    <label className="block text-[rgb(224,204,250)] mb-2">Date</label>
                    <input
                      type="date"
                      value={editingBlog.date}
                      onChange={(e) => setEditingBlog({...editingBlog, date: e.target.value})}
                      className="w-full bg-[#13151a] text-white rounded-md px-4 py-2 border border-[rgb(136,58,234)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[rgb(224,204,250)] mb-2">Tags (comma-separated)</label>
                  <input
                    type="text"
                    value={editingBlog.tags.join(', ')}
                    onChange={(e) => setEditingBlog({...editingBlog, tags: e.target.value.split(',').map(tag => tag.trim())})}
                    className="w-full bg-[#13151a] text-white rounded-md px-4 py-2 border border-[rgb(136,58,234)]"
                  />
                </div>

                <div>
                  <label className="block text-[rgb(224,204,250)] mb-2">Image URL</label>
                  <input
                    type="text"
                    value={editingBlog.image}
                    onChange={(e) => setEditingBlog({...editingBlog, image: e.target.value})}
                    className="w-full bg-[#13151a] text-white rounded-md px-4 py-2 border border-[rgb(136,58,234)]"
                  />
                </div>
                
                <div className="flex justify-end space-x-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 text-[rgb(224,204,250)] hover:text-white transition-colors duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (editingBlog.id) {
                        setBlogs(blogs.map(blog => 
                          blog.id === editingBlog.id ? editingBlog : blog
                        ));
                      } else {
                        setBlogs([...blogs, {...editingBlog, id: Date.now()}]);
                      }
                      setIsEditing(false);
                    }}
                    className="bg-[rgb(136,58,234)] text-white py-2 px-6 rounded-md hover:bg-[rgb(49,10,101)] transition-colors duration-300"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}