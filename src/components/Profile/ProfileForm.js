import React from 'react'
const ProfileForm = ({ profile, handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit}>
    <label>Nickname</label>
    <input
      required
      placeholder='Enter profile nickname'
      // This name should line up with the state we want to change
      name='nickname'
      value={profile.nickname}
      onChange={handleChange}
    />
    <label>Avatar</label>
    <input
      placeholder='Enter profile avatar'
      // This name should line up with the state we want to change
      name='avatar'
      value={profile.avatar}
      onChange={handleChange}
    />
    <button type='submit'>Create profile</button>
  </form>
)
export default ProfileForm
