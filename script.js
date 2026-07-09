document.addEventListener('DOMContentLoaded', () => {
    const profileCard = document.getElementById('profileCard');
    const followBtn = document.getElementById('followBtn');
    const messageBtn = document.getElementById('messageBtn');
    const followText = document.getElementById('followText');
    const avatar = document.getElementById('avatar');
    
    let isFollowing = false;
    
    // Follow button toggle
    followBtn.addEventListener('click', () => {
        isFollowing = !isFollowing;
        
        if (isFollowing) {
            followText.textContent = 'Following';
            followBtn.classList.add('following');
            followBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            
            // Animate stats
            animateStatValue(document.querySelectorAll('.stat-value')[1], '8.5k', '9.2k');
        } else {
            followText.textContent = 'Follow';
            followBtn.classList.remove('following');
            followBtn.style.background = '';
            
            // Reset stats
            animateStatValue(document.querySelectorAll('.stat-value')[1], '9.2k', '8.5k');
        }
        
        // Add click animation
        followBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            followBtn.style.transform = '';
        }, 150);
    });
    
    // Message button
    messageBtn.addEventListener('click', () => {
        messageBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            messageBtn.style.transform = '';
            alert('Message feature coming soon!');
        }, 150);
    });
    
    // Avatar hover effect
    avatar.addEventListener('mouseenter', () => {
        avatar.style.transform = 'scale(1.1) rotate(5deg)';
    });
    
    avatar.addEventListener('mouseleave', () => {
        avatar.style.transform = '';
    });
    
    // Skill tag hover effects
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            tag.style.transform = 'translateY(-2px)';
            tag.style.boxShadow = '0 4px 12px rgba(99, 102, 241, 0.3)';
        });
        
        tag.addEventListener('mouseleave', () => {
            tag.style.transform = '';
            tag.style.boxShadow = '';
        });
    });
    
    // Social links hover
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.color = '#818cf8';
            link.style.transform = 'scale(1.2)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.color = '';
            link.style.transform = '';
        });
    });
    
    // Card tilt effect on mouse move
    profileCard.addEventListener('mousemove', (e) => {
        const rect = profileCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        profileCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    profileCard.addEventListener('mouseleave', () => {
        profileCard.style.transform = '';
    });
    
    // Animate stat value change
    function animateStatValue(element, from, to) {
        element.style.transition = 'transform 0.3s ease, color 0.3s ease';
        element.style.transform = 'scale(1.2)';
        element.style.color = '#10b981';
        
        setTimeout(() => {
            element.textContent = to;
            element.style.transform = 'scale(1)';
            element.style.color = '';
        }, 300);
    }
    
    // Add entrance animations
    const elements = document.querySelectorAll('.profile-info, .stats-grid, .about-section, .skills-section, .social-links, .card-footer');
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100 * (index + 1));
    });
});