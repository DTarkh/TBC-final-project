
'use client';

import { useState } from 'react';

const AddPostForm = () => {
  const [formData, setFormData] = useState({ title: '', body: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSuccess(false); // Reset success message on input change
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          user_id: 1, // Replace with dynamic user ID
          created_at: new Date(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create post');
      }

      setFormData({ title: '', body: '' }); // Reset form
      setSuccess(true); // Show success message
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Post</h2>

      {/* Title Input */}
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
        />
      </div>

      {/* Body Input */}
      <div className="mb-4">
        <label htmlFor="body" className="block text-sm font-medium text-gray-700">
          Body
        </label>
        <textarea
          id="body"
          name="body"
          value={formData.body}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className={`w-full py-2 px-4 text-white rounded-lg ${
          loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
        } transition duration-300`}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>

      {/* Error Message */}
      {error && <p className="text-sm text-red-500 mt-2">{error}</p>}

      {/* Success Message */}
      {success && <p className="text-sm text-green-500 mt-2">Post added successfully!</p>}
    </form>
  );
};

export default AddPostForm;