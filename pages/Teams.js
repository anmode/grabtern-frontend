import React, { useState, useEffect, useRef } from 'react';
import html2Canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Document, Page, Text, View, StyleSheet, Canvas } from '@react-pdf/renderer';

const Teams = () => {
  const pdfRef = useRef();

  const [contributor, setContributor] = useState({});
  const [commits, setCommits] = useState([]);
  const [displayedCommits, setDisplayedCommits] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const commitsPerPage = 10;

  const repoOwner = 'anmode';
  const repoName = 'grabtern-frontend';
  const contributorUsername = 'anmode';

  useEffect(() => {
    fetch(`https://api.github.com/users/${contributorUsername}`)
      .then(response => response.json())
      .then(data => setContributor(data))
      .catch(error => console.error('Error fetching contributor:', error));

    fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/commits?author=${contributorUsername}&per_page=100`)
      .then(response => response.json())
      .then(data => {
        setCommits(data);
        setDisplayedCommits(data.slice(startIndex, startIndex + commitsPerPage));
      })
      .catch(error => console.error('Error fetching commits:', error));
  }, []);

  const handleNextPage = () => {
    const newIndex = startIndex + commitsPerPage;
    setDisplayedCommits(commits.slice(newIndex, newIndex + commitsPerPage));
    setStartIndex(newIndex);
  };

  const handlePrevPage = () => {
    const newIndex = startIndex - commitsPerPage;
    setDisplayedCommits(commits.slice(newIndex, newIndex + commitsPerPage));
    setStartIndex(newIndex);
  };

  const handleExport = () => {
    const input = pdfRef.current;
    html2Canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p','mm','a4',true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imageWidth = canvas.width;
      const imageHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imageWidth, pdfHeight / imageHeight);
      const imgX = (pdfWidth - imageWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(imgData, 'PNG', imgX, imgY, imageWidth * ratio, imageHeight * ratio);
      pdf.save('invoice.pdf');
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md" ref={pdfRef}>
        <img
          src={contributor.avatar_url}
          alt={`${contributor.login}'s Avatar`}
          className="w-20 h-20 rounded-full mx-auto"
        />
        <h2 className="text-xl font-semibold text-center mt-4">
          Thank You {contributor.login} 💙
        </h2>
        <div className="bg-gray-500 text-white mt-4 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Commits</h3>
          <ul className="space-y-2">
            {displayedCommits.map(commit => (
              <li key={commit.sha}>
                <span className="text-gray-300 font-semibold">#{commit.sha.slice(0, 6)}</span> - {commit.commit.message}
              </li>
            ))}
          </ul>
          <div className="flex justify-between mt-4">
            {startIndex >= commitsPerPage && (
              <button
                className="bg-purple-500 hover:bg-purple-700 text-white font-semibold px-4 py-2 rounded-lg"
                onClick={handlePrevPage}
              >
                Previous
              </button>
            )}
            {startIndex + commitsPerPage < commits.length && (
              <button
                className="bg-purple-500 hover:bg-purple-700 text-white font-semibold px-4 py-2 rounded-lg"
                onClick={handleNextPage}
              >
                Next
              </button>
            )}
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="bg-purple-500 hover:bg-purple-700 text-white font-semibold px-4 py-2 rounded-lg"
            onClick={handleExport}
          >
            Export Commits as PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default Teams;
